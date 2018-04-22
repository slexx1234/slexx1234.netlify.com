#!/bin/bash

convert -density 10000 -resize 36 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-36.png
convert -density 10000 -resize 48 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-48.png
convert -density 10000 -resize 72 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-72.png
convert -density 10000 -resize 95 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-95.png
convert -density 10000 -resize 144 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-144.png
convert -density 10000 -resize 192 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-192.png
convert -density 10000 -resize 512 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/android-512.png

convert -density 10000 -resize 70 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/windows-70.png
convert -density 10000 -resize 150 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/windows-150.png
convert -density 10000 -resize 310 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/windows-310.png

convert -density 10000 -resize 57 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-57.png
convert -density 10000 -resize 60 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-60.png
convert -density 10000 -resize 72 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-72.png
convert -density 10000 -resize 76 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-76.png
convert -density 10000 -resize 114 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-114.png
convert -density 10000 -resize 120 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-120.png
convert -density 10000 -resize 144 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-144.png
convert -density 10000 -resize 152 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-152.png
convert -density 10000 -resize 180 -background none ./static/images/favicons/favicon.svg ./static/images/favicons/ios-180.png

