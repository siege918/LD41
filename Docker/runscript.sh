Xvfb -screen 0 1280x720x24 &
pulseaudio
#
DISPLAY=:0 google-chrome --kiosk --no-first-run --window-size=1281,721 --window-position=0,0 $1 &
#
#ffmpeg -f x11grab -s "1280x720" -r "30" -i :0 -f alsa -i pulse -f lavfi -f flv -ac 2 -vcodec libx264 -g 60 -keyint_min 30 -b:v 6000k -minrate 1000k -maxrate 6000k -pix_fmt yuv420p -s "1280x720" -preset ultrafast -tune film -threads 2 -strict normal -bufsize 6000k "rtmp://live-atl.twitch.tv/app/$2"
ffmpeg -f x11grab -draw_mouse 0 -s "1280x720" -r "30" -i :0 -f alsa -i pulse -f lavfi -f flv -ac 2 -ar 44100 -vcodec libx264 -g 60 -keyint_min 30 -b:v 6000k -minrate 6000k -maxrate 6000k -pix_fmt yuv420p -s "1280x720" -preset ultrafast -tune film -acodec libmp3lame -threads 4 -strict normal -bufsize 6000k "rtmp://live-jfk.twitch.tv/app/$2"