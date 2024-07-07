var Login = function ($) {

// --------------------------------------------------
// CONSTRUCTOR
// --------------------------------------------------

    var $construct = function () {
        $private.registerEventHandler();
        $private.bindCollapseToggles();
        $private.registerCodeComponents();
        $private.applyTimeLock();
        $private.setFailed();
        $private.focusFirstEmptyInputField();
        return $public;
    };

// --------------------------------------------------
// PRIVATE
// --------------------------------------------------

    var $private = {

        element: {                       // various elements in the dom
            body: $('body'),
            formInput: $('.form-input'), // the input fields
            formInputSet: $('.form-input-set'), // the input fields
            formCheckbox: $('.form-checkbox'),  // the checkboxes
            loginButton: $('#login #pw_submit'), // the login button
            collapsiblesControls: $("[data-toggle='collapse']"), //collapsibles
            loginForm: $('form'), // every form
            footer: $('#tbs-footer'), // the footer
            header: $('#tbs-header'), // the header
            navBar: $('#tbs-nav'), // the navigation bar
            profileContainer: $('.tbs-profile') // profile container
        },
        styleClass: {					 // various style class names
            failed: 'decoration-negative',
            hidden: 'hidden',
            inputSet: 'form-input-set',
            scrolled: 'scrolled',
            sticky: 'sticky'
        },
        selector: {					 // various style class names
            failedFormInput: '.form-input-set.decoration-negative .form-input',
            failedFormInputSet: '.form-input-set.decoration-negative',
            profileButton: '.tbs-profile__button',
            profileVisibleModifier: 'tbs-profile--visible',
        },
        misc: {
            submitted: false,			// is login form submitted?
            fixedHeaderHeight: 4,
            loginFailed: self.loginFailed
        },

        /**
         * Registers various event handlers.
         *
         * @return    {Undefined}
         */
        registerEventHandler: function () {
            $(window).on('scroll', $private.resizeHeader).scroll();
            $(window).on('resize', $private.checkFooter).resize();
            $private.element.formInput.not(".static").on('focusin focusout keyup', $private.floatLabel).each($private.floatLabel);
            $private.element.formInput.on("focusout", $private.toggleInfoBox);
            $private.element.loginForm.on('submit', $private.onSubmitLoginForm);
            // $private.selector.failedFormInput.one('keyup', $private.onChangeInput);
            $(document).on('keyup', $private.selector.failedFormInput, $private.onChangeInput);
            $private.element.profileContainer.find($private.selector.profileButton).on('click', $private.onProfileIconClick);
        },

        /**
         * Binds the click events for elements with collapse data toggles.
         *
         * @return    {Undefined}
         */

        bindCollapseToggles: function () {
            $($private.element.collapsiblesControls).each(function (key, collapsibleControl) {
                $(collapsibleControl).on("mousedown", function (event) {
                    var $targetElementSelector = $(this).data("target");
                    var $inputField = $(event.target).prev('input');
                    var $hideTriggerElement = $(this).data("toggle-hide");

                    //prevent default DOM action
                    event.preventDefault();
                    event.stopPropagation();

                    if ($inputField) {
                        $inputField.trigger("focus").select();
                    }

                    $($targetElementSelector).slideToggle();

                    $($targetElementSelector).off("mousedown").on("mousedown", function (targetEvent) {
                        targetEvent.preventDefault();
                        targetEvent.stopPropagation();

                        $(this).slideToggle();
                        if ($hideTriggerElement) {
                            $(event.target).removeClass("hidden");
                        }
                        if ($inputField) {
                            $inputField.trigger("focus");
                        }
                    });

                    if ($hideTriggerElement) {
                        $(event.target).addClass("hidden");
                    }
                });
            });
        },

        toggleInfoBox: function () {
            var $this = $(this),
                descriptionElementSelector = "#" + $this.attr('aria-describedby'),
                $descriptionElement = $(descriptionElementSelector);

            $descriptionElement.slideUp();
            $private.element.collapsiblesControls.each(function () {
                var targetElementSelector = $(this).data("target");
                descriptionElementSelector === targetElementSelector ? $(this).removeClass('hidden') : "";
            });
        },

        /**
         * Focusing the first input field
         *
         * @return (Undefined)
         *
         */
        focusFirstEmptyInputField: function () {
            $private.element.formInput.filter(function () {
                return $(this).val() === '' && $(this).is('input');
            }).first().focus();
        },

        /**
         * Registers various code components.
         *
         * @return    {Undefined}
         */
        registerCodeComponents: function () {
            $private.element.formCheckbox.checkbox();
        },

        /**
         * Resizes the brand bar when needed
         *
         * @param    {Object}    the event (focusin focusout)
         * @return    {Undefined}
         */
        resizeHeader: function (event) {
            // The header will become fixed when the scrollTop reaches the height of the header minus the fixed header height - 1
            $private.element.body.toggleClass($private.styleClass.scrolled, $(document).scrollTop() > $private.element.header.height() - $private.misc.fixedHeaderHeight - 1 - ($private.element.navBar.length ? $private.element.navBar.height() : 0));
        },

        /**
         * Floats the label in the input field
         *
         * @param    {Object}    the event (focusin focusout)
         * @return    {Undefined}
         */
        floatLabel: function (event) {
            var $this = $(this);
            var isFloating = $this.get(0) === document.activeElement || $this.val() !== '';
            $this.parent().toggleClass('floating', isFloating);
        },

        /**
         * Handles the submit of the login form. Only one submit is allowed.
         *
         * @param    {Object}    the event (submit)
         * @return    {Boolean}
         */
        onSubmitLoginForm: function (event) {
            if ($private.misc.submitted) {
                return false;
            } else {
                $private.misc.submitted = true;
            }
        },

        /**
         * Applies a time lock to the login/submit button. This just happens depending on
         * several backend parameters.
         *
         * @return    {Undefined}
         */
        applyTimeLock: function () {
            var now = new Date().getTime();
            if (self.accountLockedPermanent || (self.accountLocked && self.accountLockExpiration > now)) {
                $private.disableElement($private.element.loginButton);
                self.accountLockedPermanent || setTimeout(function () {
                    $private.enableElement($private.element.loginButton);
                }, self.accountLockExpiration - now);
            }
        },

        /**
         * Enables an element.
         *
         * @param    {Object}    the element
         * @return    {Undefined}
         */
        enableElement: function (element) {
            element.removeAttr('disabled');
        },

        /**
         * Disables an element.
         *
         * @param    {Object}    the element
         * @return    {Undefined}
         */
        disableElement: function (element) {
            element.attr('disabled', true);
        },

        /**
         * Calculates the need for the footer to be sticky and toggles specific style class.
         *
         * @return  {undefined}
         */
        checkFooter: function () {

            // the calculation has only to be done if a sticky footer is requested
            if ($private.element.footer.length) {

                // determine the different heights for the calculation
                var height = {
                    viewport: $(window).height(),
                    body: $('body').height(),
                    footer: $private.element.footer.outerHeight(true)
                };

                // re-determine the height of the body based on the info whether or not the footer is already sticky
                var isSticky = $private.element.footer.hasClass($private.styleClass.sticky);
                height.body += isSticky ? height.footer : 0;

                // calculate the need for stickyness and toggle the style class accordingly
                $private.element.footer.toggleClass($private.styleClass.sticky, height.viewport > height.body);

            }
        },

        /**
         * Handles the "keyup" event for input fields. Resets the state style classes.
         *
         * @return  {undefined}
         */
        onChangeInput: function () {
            var $input = $(this);
            $input.closest($private.selector.failedFormInputSet).removeClass($private.styleClass.failed);
        },

        /**
         * Marks an input field as "validation failed". Adds the negative style class and sets the error message.
         *
         * @param   {string}    selector - the css selector to fetch the element from the dom.
         * @param   {string}    messageText - the error message of the validation failure.
         * @return  {undefined}
         */
        setFailed: function () {
            if ($private.misc.loginFailed) {
                // mark field as failed
                $private.element.formInputSet.addClass($private.styleClass.failed);
            }
        },

        /**
         * Handles a click on the profile button. Toggles the profile content.
         *
         * @return  {undefined}
         */
        onProfileIconClick: function () {
            $(this).closest($private.element.profileContainer).toggleClass($private.selector.profileVisibleModifier);
        }

    };

// --------------------------------------------------
// PUBLIC
// --------------------------------------------------

    var $public = {

        /**
         * Opens a popup centered to the screen.
         *
         * @param    {String}    the url
         * @param    {String}    the title
         * @param    {Integer}    the width
         * @param    {Integer}    the height
         * @return    {Undefined}
         */
        openPopupCenter: function (url, title, w, h) {
            var left = (screen.width - w) / 2;
            var top = (screen.height - h) / 4;  // for 25% - devide by 4  |  for 33% - devide by 3
            self.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        }

    };

// --------------------------------------------------
// START
// --------------------------------------------------

    return $construct();
};

$(function () {
    Login = Login(jQuery);
});
