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
                $('.results').append($('#early-results').html());
                $('.results').append('<br/>Page-specific script ran at ' + (+(new Date) - startTime) + 'ms');
            }
        },

        search: {
            main: function() {
            }
        }
    };

    /* DOM Ready */
	$(function() {
        Site.init(AssetRace);
	});

    /* Window Ready */
	$(window).bind("load", function() {
        $('.results').append('<br/>Onload at ' + (+(new Date) - startTime) + 'ms');
	});

})(this, this.document, jQuery);
