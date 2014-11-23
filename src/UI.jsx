/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var $     = require('jquery');
var mui = require('material-ui');
var PaperButton = mui.PaperButton;

require('./UI.less');

var UI = React.createClass({
    componentDidMount: function() {

    },

    render() {
        return (
            <div className="UI">
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                <PaperButton type={PaperButton.Types.FLAT} label="Default" />
            </div>
        );
    }
});

module.exports = UI;