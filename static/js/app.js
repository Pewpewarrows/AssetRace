/*
 * http://www.viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution/
 *
 * Essentially, just add 'data-controller' and 'data-action' attributes to the 'body' tag
 * and define those as functions within objects here to get page-specific 'document.ready'
 * code to fire. Big thanks to Paul Irish and Jason Garber.
 *
 * Modified to accept the namespace as an init argument and to place all DOM
 * ready functions in their own inner namespace: 'ready'.
 */
var Site = {
    ns: null,

    exec: function(controller, action) {
        action = (action === undefined) ? 'init' : action;

        if ((controller !== '') && this.ns.ready[controller] && (typeof this.ns.ready[controller][action] === 'function')) {
            this.ns.ready[controller][action]();
        }
    },

    init: function(ns) {
        var body = document.body,
        controller = body.getAttribute('data-controller'),
        action = body.getAttribute('data-action');

        this.ns = ns;

        this.exec('common');
        this.exec(controller);
        this.exec(controller, action);
        this.exec('common', 'finalize');
    }
};
var AssetRace = AssetRace || {};

/* Create a closure to maintain scope of the '$',
   ensure that our global variables haven't been messed with,
   and remain compatible with other frameworks.  */
(function(window, document, $, undefined) {

    // It's rare that we'd ever want to cache AJAX responses on the browser
    // side as opposed to a server-side memcached setup, for example.
    $.ajaxSetup({
        cache: false
    });

    AssetRace.global = this;

    AssetRace.status = null;

    AssetRace.log = function() {
        if (this.console) {
            if ('settings' in AssetRace) {
                if (AssetRace.settings.debug) {
                    console.log(Array.prototype.slice.call(arguments));
                }
            } else {
                console.log(Array.prototype.slice.call(arguments));
            }
        }
    };

    // Quick wrapper
    window.log = function() {
        AssetRace.log(Array.prototype.slice.call(arguments));
    };


    AssetRace.settings = {
        debug: false,
        ssl: false,
        static_url: '',
        media_url: '',
        search_autocomplete_url: '',

        setup: function() {
            var self = this;

            if (window.stuff) {
                self.debug = window.stuff.debug || false;
            }

            if (self.debug) {
            } else {
            }

            self.static_url = '/static/';
            self.media_url = '/uploads/';
        }
    };

    AssetRace.security = {
        shield_len: 8,
        shield_str: 'for(;;);',
        
        disarm_json: function(response) {
            var self = this;

            if (response.substring(0, self.shield_len) !== self.shield_str) {
                return response;
            }

            if (response.length > self.shield_len) {
                response = response.substring(self.shield_len);
            }

            return response;
        }
    };

    AssetRace.ready = {
        common: {
            // This function will fire on every page first
            init: function() {
                AssetRace.settings.setup();
            }
        },

        search: {
            main: function() {
            }
        }
    };

    /* DOM Ready */
	$(function() {
        $('.results').append($('#early-results').html());
        $('.results').append('<br/>DOMReady at ' + (+(new Date) - startTime) + 'ms');
        Site.init(AssetRace);
	});

    /* Window Ready */
	$(window).bind("load", function() {
        $('.results').append('<br/>Onload at ' + (+(new Date) - startTime) + 'ms');
	});

})(this, this.document, jQuery);
var early_res = document.getElementById('early-results');

if (!early_res) {
    if (document.body) {
        early_res = document.createElement('div');
        early_res.setAttribute('id', 'early-results');
        document.body.appendChild(early_res);
    } else {
        document.write('<div id="early-results"></div>');
        early_res = document.getElementById('early-results');
    }
}

early_res.innerHTML += '<br/>Javascript finished loading at ' + (+(new Date) - startTime) + 'ms';

