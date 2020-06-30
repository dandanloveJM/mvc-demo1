import './app2.css'
import $ from 'jquery'
/*监听两个tab的点击事件*/
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
let index = localStorage.getItem(localKey) || 0
// 监听父元素，这就是事件委托
$tabBar.on('click', 'li', (e) => {
    // 获取用户点击的是哪一个Li
    let $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    index = $li.index()
    localStorage.setItem(localKey, index)
    // 不要用css, show, hide 这些api
    // 而是应该添加一个类addclass, 然后在addclass里写css
    // js不关心css具体怎么实现
    // js不要直接操作css
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass(('active'))
})