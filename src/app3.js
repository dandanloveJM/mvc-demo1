import './app3.css'
import $ from 'jquery'
const $square = $("#app3 .square")
$square.on('click', (e)=>{
    // 如果有就删去，如果没有就加上
    $square.toggleClass('active')

})