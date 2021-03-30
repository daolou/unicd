#!/usr/bin/env bash

npmjs=http://registry.npmjs.org
origin=$(npm config get registry) # 原仓库镜像

echo "原仓库镜像为 $origin"
printf '\t\n'

if [[ "$npmjs" != "$origin" ]]; then
  npm config set registry="$npmjs"
  echo "已将仓库镜像设置为 $npmjs"
  printf '\t\n'
fi

echo "-------开始编译-------"
printf '\t\n'
npm run compile
echo "-------结束编译-------"
printf '\t\n'

# 是否已经登陆
current=$(npm whoami 2>/dev/null)
if [[ $(echo $?) == 1 ]]; then
  echo '请先进行登录相关操作：npm login'
  exit 0
else
  echo "当前已登陆：$current"
  printf '\t\n'
fi

echo "-------开始发布-------"
printf '\t\n'
npm publish
echo "-------发布完成-------"
printf '\t\n'

if [[ "$npmjs" != "$origin" ]]; then
  # 设置为原仓库镜像
  npm config set registry="$origin"
  echo "已还原仓库镜像为 $origin"
fi

exit 0