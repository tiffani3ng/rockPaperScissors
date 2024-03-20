# Makefile for web deployment

all: PutHTML

PutHTML:
  cp rockPaperScissors.html /var/www/html/rockPaperScissors/
  cp rockPaperScissors.css /var/www/html/rockPaperScissors/
  cp rockPaperScissors.js /var/www/html/rockPaperScissors/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/rockPaperScissors/
