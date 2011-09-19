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
