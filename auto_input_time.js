var editTitle = "勤務データ編集"
var titleClassName = "htBlock-pageTitle"

var stillRecordId = "recording_type_code"
var recordedIdPrefix = stillRecordId + "_"
var timeIdPrefix = "recording_timestamp_time_"


var titleEls = document.getElementsByClassName(titleClassName);

var submitButtonId = "button_01"


var genRand10 =()=> Math.floor( 11 * Math.random() );
var rand0 = genRand10()
var rand1 = rand0 + genRand10()
var timeList = [0,1000 + rand0,1900+ rand1,1200,1300]


if(titleEls.length > 0 && titleEls[0].textContent.trim() == editTitle)
{
    var stillRecordCount = 0
    var stillRecordCount  = document.querySelectorAll("*[id='" + stillRecordId + "']").length
    var notRecordedCount = 4 - stillRecordCount
    for (let i = 1; i <= notRecordedCount; i++) {
        var select = document.getElementById(recordedIdPrefix + i)
        select.value = i + 4 - notRecordedCount
    }

    for (let i = 1; i <= notRecordedCount; i++) {

        var select = document.getElementById(timeIdPrefix  + i)
        var time = timeList[i + 4 - notRecordedCount].toString()
        select.value = time.substr( 0, 2 ) + ":" + time.substr( 2, 2 )
        select.click();
        select.focus();
        select.blur()
    }

    if (notRecordedCount > 0)
    {
        var button = document.getElementById(submitButtonId)
        button.click()
    }

}
