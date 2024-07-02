// 1. 定义函数来请求数据
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// 2. 定义书签工具的主逻辑
async function main() {
    // 依次请求四个接口获取数据
    let data1 = await fetchData('https://api.example.com/data1');
    let data2 = await fetchData('https://api.example.com/data2');
    let data3 = await fetchData('https://api.example.com/data3');
    let data4 = await fetchData('https://api.example.com/data4');

    // 构建弹窗的 HTML 结构
    let popupHTML = `
        <div id="popup">
            <select id="dropdown1">
                <option value="${data1.value}">${data1.label}</option>
                <!-- 其他选项 -->
            </select>
            <select id="dropdown2">
                <option value="${data2.value}">${data2.label}</option>
                <!-- 其他选项 -->
            </select>
            <!-- 其他下拉框 -->
            <div id="page1" class="page">
                <!-- 页面1内容 -->
            </div>
            <div id="page2" class="page">
                <!-- 页面2内容 -->
            </div>
            <div id="page3" class="page">
                <!-- 页面3内容 -->
            </div>
        </div>
    `;

    // 创建弹窗并添加到页面中
    let popupContainer = document.createElement('div');
    popupContainer.innerHTML = popupHTML;
    document.body.appendChild(popupContainer);

    // 添加页面切换逻辑（假设有按钮来切换页面）
    let page1Button = document.getElementById('page1Button');
    let page2Button = document.getElementById('page2Button');
    let page3Button = document.getElementById('page3Button');

    page1Button.addEventListener('click', () => {
        document.getElementById('page1').style.display = 'block';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
    });

    page2Button.addEventListener('click', () => {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        document.getElementById('page3').style.display = 'none';
    });

    page3Button.addEventListener('click', () => {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    });

    // 其他逻辑（如关闭按钮、下拉框的事件处理等）

    // 添加关闭按钮事件处理
    let closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        popupContainer.remove();
    });

    // 下拉框事件处理（假设有下拉框事件）
    let dropdown1 = document.getElementById('dropdown1');
    dropdown1.addEventListener('change', (event) => {
        console.log('Selected value:', event.target.value);
        // 处理下拉框改变后的逻辑
    });
}

// 启动主逻辑
main();
