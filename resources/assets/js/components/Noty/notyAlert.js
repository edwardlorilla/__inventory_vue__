import Noty from 'noty';
    export default{
            notyAlert(type, message ){
            new Noty({
            type: type,
            layout: 'topRight',
            theme: 'bootstrap-v3',
            text: message,
            timeout: 3000,
            progressBar: true,
            closeWith: ['click', 'button'],
            animation: {
                open: function (promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: 2
                    }, {
                        duration: 0
                    });
                    Velocity(n.barDom, {
                        left: 0,
                        scaleY: 1
                    }, {
                        easing: [ 8, 8 ],
                        complete: function() {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
                },
                close: function (promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: '+=-50'
                    }, {
                        easing: [ 8, 8, 2],
                        duration: 350
                    });
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: .2,
                        height: 0,
                        margin: 0
                    }, {
                        easing: [ 8, 8 ],
                        complete: function () {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
                }
            }
            }).show();
            },
    }
