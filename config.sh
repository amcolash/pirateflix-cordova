#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'ERROR usage: config.sh [dev/prod]'
    exit 1
fi

cp $1/config.xml ./config.xml
cp $1/banner.png platforms/android/app/src/main/res/drawable-land-xhdpi/banner.png
cp $1/index.html www/index.html