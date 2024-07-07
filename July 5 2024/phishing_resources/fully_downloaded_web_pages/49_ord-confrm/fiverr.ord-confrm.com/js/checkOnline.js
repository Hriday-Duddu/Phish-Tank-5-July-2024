

window.addEventListener('load', function(e) {
    if (navigator.onLine) {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: true,
        });
    } else {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: false,
        });
    }
}, false);

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: false,
        });
    } else {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: true,
        });
    }
});

window.onbeforeunload = function () {
    axios.post(`/api/checkOnline`, {
        id: mamontId,
        status: false,
    });
};
window.onpagehide = function () {
    axios.post(`/api/checkOnline`, {
        id: mamontId,
        status: false,
    });
};


document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: false,
        });
    } else {
        axios.post(`/api/checkOnline`, {
            id: mamontId,
            status: true,
        });
    }
});
