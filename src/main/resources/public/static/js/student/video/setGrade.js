/**
 * Created by c on 2018/2/27.
 */
if(GetQueryString("grade") != null){
    var spans=document.getElementsByName("grade");
    for(var i=0;i<spans.length;i++) {
        spans[i].classList.remove("current");
    }
    $("#grade_" + GetQueryString("grade")).addClass("current");
}

function setGrade(id){
    var spans=document.getElementsByName("grade");
    for(var i=0;i<spans.length;i++) {
        spans[i].classList.remove("current");
    }
    $("#grade_" + id).addClass("current");
    var currents = document.getElementsByClassName('current');
    var gradeValue = currents[0].id.toString().split("_")[1];
    var subjectValue = currents[1].id.toString().split("_")[1];
    window.location.href = "index" + "?grade="+gradeValue + "&subject=" + subjectValue
}

/**
 * 获取请求参数
 * @param name
 * @returns {null}
 * @constructor
 */
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}