@echo off
color 0A

echo                ===========Start===========

cls
echo.请输入你要加入的oss地址前缀
echo.如为默认（http://oss.aliyuncs.com/tapheroes/resource_Publish/）
echo.请输入 0 否则请自行输入
set /p uri=
echo.请输入你要进行的操作1或者 2（1：追加，2：恢复）
set /p process_type=

python replaceResUrl.py %uri% %process_type%

echo                ===========End===========
pause

