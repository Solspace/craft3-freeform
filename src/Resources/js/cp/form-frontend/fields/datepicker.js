"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var a=arguments[t];if(null!=a)for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e});var picker=document.getElementById("{id}");if(picker){var dateFormat=picker.getAttribute("data-datepicker-format"),enableTime=null!==picker.getAttribute("data-datepicker-enabletime"),enableDate=null!==picker.getAttribute("data-datepicker-enabledate"),clock_24h=null!==picker.getAttribute("data-datepicker-clock_24h"),locale=picker.getAttribute("data-datepicker-locale"),minDate=picker.getAttribute("data-datepicker-min-date"),maxDate=picker.getAttribute("data-datepicker-max-date"),options={disableMobile:!0,allowInput:!0,dateFormat:dateFormat,enableTime:enableTime,noCalendar:!enableDate,time_24hr:clock_24h,minDate:minDate,maxDate:maxDate,minuteIncrement:1,hourIncrement:1,locale:locale};flatpickr(picker,options)}