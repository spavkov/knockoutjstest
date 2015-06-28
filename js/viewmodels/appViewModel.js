define(["knockout"], function (ko) {

    var Section = function (name, selected) {
        this.name = name;
        this.isSelected = ko.computed(function() {
            return this === selected();
        }, this);
    }

    var appViewModel = function () {
        'use strict';
        var self = this;
        console.info("appviewmodel");

        self.selectedTab = ko.observable();

        self.tabs = ko.observableArray([
            new Section('one', self.selectedTab),
            new Section('two', self.selectedTab),
            new Section('three', self.selectedTab)
            ]);

        self.selectedTab(self.tabs()[0]);

        self.getTemplate = function(item) {
            var selected = self.selectedTab();
            return selected && selected.name;
        }
    };

    return new appViewModel();
});
