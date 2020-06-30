import './app3.css'
import $ from 'jquery'
const $square = $("#app3 .square")
const localKey = 'app3-active'
const active = localStorage.getItem(localKey) === 'yes'
// 用Localstorage的目的是在里面保存当前状态，这样等页面刷新之后，数据还会存在

// if(active) {
//     $square.addClass('active')
// } else {
//     $square.removeClass('active')
// }
// 以上代码可简写为
$square.toggleClass('active', active)

$square.on('click', (e)=>{
    // 如果有就删去，如果没有就加上  toggleClass
    // $square.toggleClass('active')
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem('app3-active', 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem('app3-active', 'yes')
    }

})