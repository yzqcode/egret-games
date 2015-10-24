@echo off
if exist error_publish.txt  del error_publish.txt /f /q

echo 正在发布项目
@echo on
egret publish

