function displayNum(num)
{
    document.getElementById('result').value+=num
}
function clearAll()
{
    document.getElementById('result').value=""
}
function backSpace()
{
    result.value=result.value.slice(0,-1)
}
function finalResult()
{
    result.value=eval(result.value)
}