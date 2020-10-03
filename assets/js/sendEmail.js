// Send email script
function sendMail(contactForm) {
    emailjs.send("gmail", "first_test_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Your message was successfully sent!");
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    document.getElementById('submit-button').innerHTML = '<img class="spiner" src="assets/images/loading.gif" alt="">';

    setTimeout(function () {
        document.getElementById("myForm").reset();
        document.getElementById('submit-button').innerHTML = 'Send';
    }, 3000);

    return false;  // To block from loading a new page
}

// Show Phone Number
function showPhone() {
    let pass = prompt('Please enter the PIN to see this information', '')
    if (pass == '5061') {
        document.getElementById('personal-phone').innerHTML = '${{ secret.SECRET_PHONE }}';
        document.getElementById('personal-phone').classList.remove('personal-phone-hide');
        document.getElementById('personal-phone').classList.add('personal-info-item');
    } else {
        alert('The PIN does not match, please use contact form to ask the PIN')
    }
}

// Show Email Address
function showEmail() {
    let pass = prompt('Please enter the PIN to see this information', '')
    if (pass == '5061') {
        document.getElementById('personal-email').innerHTML = 'iulian.prodea@outlook.com';
        document.getElementById('personal-email').classList.remove('personal-email-hide');
        document.getElementById('personal-email').classList.add('personal-info-item');
    } else {
        alert('The PIN does not match, please use contact form to ask the PIN')
    }
}

// Activate redirect link to My Certificate
function showCertificate() {
    let pass = prompt('Please enter the PIN to access this information', '')
    if (pass == '5061') {
        document.getElementById('personal-certificate').setAttribute('target', '_blank')
        document.getElementById('personal-certificate').href = 'https://www.credential.net/649d93fa-e584-4425-a024-9996c2c4f70c';
    } else {
        alert('The PIN does not match, please use contact form to ask the PIN')
        document.getElementById('personal-certificate').href = 'https://iulian.pro/contact.html';
    }
    return false;
}

// Disable shortcuts
shortcut = {
    all_shortcuts: {},
    add: function (e, t, n) {
        var r = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (n) for (var i in r) "undefined" == typeof n[i] && (n[i] = r[i]);
        else n = r;
        r = n.target, "string" == typeof n.target && (r = document.getElementById(n.target)), e = e.toLowerCase(), i = function (r) {
            r = r || window.event;
            if (n.disable_in_input) {
                var i;
                r.target ? i = r.target : r.srcElement && (i = r.srcElement), 3 == i.nodeType && (i = i.parentNode);
                if ("INPUT" == i.tagName || "TEXTAREA" == i.tagName) return
            }
            r.keyCode ? code = r.keyCode : r.which && (code = r.which), i = String.fromCharCode(code).toLowerCase(), 188 == code && (i = ","), 190 == code && (i = ".");
            var s = e.split("+"),
                o = 0,
                u = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                }, f = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                }, l = !1,
                c = !1,
                h = !1,
                p = !1,
                d = !1,
                v = !1,
                m = !1,
                y = !1;
            r.ctrlKey && (p = !0), r.shiftKey && (c = !0), r.altKey && (v = !0), r.metaKey && (y = !0);
            for (var b = 0; k = s[b], b < s.length; b++) "ctrl" == k || "control" == k ? (o++, h = !0) : "shift" == k ? (o++, l = !0) : "alt" == k ? (o++, d = !0) : "meta" == k ? (o++, m = !0) : 1 < k.length ? f[k] == code && o++ : n.keycode ? n.keycode == code && o++ : i == k ? o++ : u[i] && r.shiftKey && (i = u[i], i == k && o++);
            if (o == s.length && p == h && c == l && v == d && y == m && (t(r), !n.propagate)) return r.cancelBubble = !0, r.returnValue = !1, r.stopPropagation && (r.stopPropagation(), r.preventDefault()), !1
        }, this.all_shortcuts[e] = {
            callback: i,
            target: r,
            event: n.type
        }, r.addEventListener ? r.addEventListener(n.type, i, !1) : r.attachEvent ? r.attachEvent("on" + n.type, i) : r["on" + n.type] = i
    },
    remove: function (e) {
        var e = e.toLowerCase(),
            t = this.all_shortcuts[e];
        delete this.all_shortcuts[e];
        if (t) {
            var e = t.event,
                n = t.target,
                t = t.callback;
            n.detachEvent ? n.detachEvent("on" + e, t) : n.removeEventListener ? n.removeEventListener(e, t, !1) : n["on" + e] = !1
        }
    }
},

    shortcut.add("Ctrl+U", function () {
        alert('This action is not allowed')
    }),
    shortcut.add("Meta+Alt+U", function () {
        alert('This action is not allowed')
    }),
    shortcut.add("Ctrl+C", function () {
        alert('This action is not allowed')
    }),
    shortcut.add("Meta+C", function () {
        alert('This action is not allowed')
    }),
    shortcut.add("Ctrl+Shift+I", function () {
        alert('This action is not allowed')
    }),
    shortcut.add("F12", function () {
        alert('This action is not allowed')
    });
