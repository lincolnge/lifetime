$(function() {
    'use strict';
    var d1 = new Date(1991, 6, 28); //  d1 = 680630400000;
    var d2 = new Date();
    var diff = 0;
    $('#calculated').val(Math.floor((d2.getTime() - d1) / (3600 * 1000 * 24)));
    var selector = function(dateStr) {
        d1 = $('#date1').datepicker('getDate');
        // var d2 = $('#date2').datepicker('getDate');
        diff = 0;
        console.log(d1.getTime());
        if (d1 && d2) {
            diff = Math.floor((d2.getTime() - d1.getTime()) / (3600 * 1000 * 24)); // ms per day
        }
        $('#calculated').val(diff);
    };
    $('#date1').datepicker({
        defaultDate: new Date(1991, 6, 28),
        changeMonth: true,
        changeYear: true,
        yearRange: '1950:2050'
    });
    $('#anim').change(function() {
        $('#date1').datepicker('option', 'showAnim', $(this).val());
    });
    $('#date1').change(selector);
});