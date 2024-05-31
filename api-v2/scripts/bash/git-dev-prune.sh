#!/bin/bash

function invalid_option() {
  echo ""
  ColorRed "Invalid Option"
  echo ""
}

##
# Color  Variables
##
red="\033[31m"
green="\033[32m"
blue="\033[34m"
clear="\033[0m"

##
# Color Functions
##

ColorRed() {
  echo -ne "$red""$1""$clear"
}
ColorGreen() {
  echo -ne "$green""$1""$clear"
}
ColorBlue() {
  echo -ne "$blue""$1""$clear"
}

menu() {
  echo -ne "
Are you sure you want to do this?:
$(ColorGreen 'Y)') YES
$(ColorGreen 'N)') NO
$(ColorGreen '0)') Exit
$(ColorBlue 'Choose an option:') "
  read -r a
  case $a in
  y | Y)
    xargs git branch -d <<<"$LOCAL_BRANCHES"
    ;;
  n | N) clear ;;
  0) clear ;;
  *)
    clear
    invalid_option
    menu
    ;;
  esac
}

# Init commands
echo ""
echo "Pruning git branches..."
git checkout main
git pull
git fetch --prune
LOCAL_BRANCHES=$(git branch --merged | grep -v "\*")
echo "This will delete branches:"
echo "$LOCAL_BRANCHES"
echo ""
# Call the confirmation menu function
menu
