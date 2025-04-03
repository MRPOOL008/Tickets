let scrollPos;
function saveScroll(ctrlId) {
    scrollPos = $("#wrapper").scrollTop();
}
function setScroll(){
    setTimeout(() => {
        $("#wrapper").scrollTop(scrollPos);
    }, 100)
}

function invokeRowClickWithOption(trgrCtrlName,selctedoptn) {
    try {
        //get current Cicked elmnt
        var cElm = event.target
        //get label id from rowdetails
        var rowLabel = $(cElm).closest('label');
        if ($(rowLabel).length > 0) {
            var rowLabelId = $(rowLabel)[0].id;
            saveScroll(rowLabelId);
            var spltIDs = rowLabelId.split('_');
            if (spltIDs.length > 5) {
                //get row and column (row_col)
                var row=parseInt(spltIDs[4])+1;
                var rowColId = row + '_' + selctedoptn;
                SetBusy(true);
                $('[name="'+trgrCtrlName+'"]').val(rowColId)
                $('[name="'+trgrCtrlName+'"]').trigger('change')
            }
        }
    } catch (e) {
        console.log(e)
    }
}
