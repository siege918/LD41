wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list
apt-get update
apt-get install -y apt-utils xorg xvfb ffmpeg screen sudo google-chrome-stable pulseaudio
adduser --disabled-password --gecos "" streamer
cp runscript.sh /home/streamer/runscript.sh
cd /home/streamer
chown streamer:streamer runscript.sh
chmod +x runscript.sh
