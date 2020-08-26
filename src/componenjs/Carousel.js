import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption, CarouselControl } from 'reactstrap';
var items = [
    {
        key: '1'
    },
    {
        key: '2'
    },
    {
        key: '3'
    }
];
var CarouselHeader = function (props) {
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var _b = useState(false), animating = _b[0], setAnimating = _b[1];
    var next = function () {
        if (animating)
            return;
        var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    var previous = function () {
        if (animating)
            return;
        var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    var goToIndex = function (newIndex) {
        if (animating)
            return;
        setActiveIndex(newIndex);
    };
    var slides = items.map(function (item) {
        return (React.createElement(CarouselItem, { onExiting: function () { return setAnimating(true); }, onExited: function () { return setAnimating(false); }, key: item.src },
            React.createElement("img", { src: item.src, alt: item.altText }),
            React.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.caption })));
    });
    return (React.createElement(Carousel, { activeIndex: activeIndex, next: next, previous: previous, interval: false },
        React.createElement(CarouselIndicators, { items: items, activeIndex: activeIndex, onClickHandler: goToIndex }),
        slides,
        React.createElement(CarouselControl, { direction: "prev", directionText: "Previous", onClickHandler: previous }),
        React.createElement(CarouselControl, { direction: "next", directionText: "Next", onClickHandler: next })));
};
export default CarouselHeader;
