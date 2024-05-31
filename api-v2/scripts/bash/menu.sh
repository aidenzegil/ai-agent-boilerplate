#!/bin/bash

function deployment_menu() {
  echo ""
  echo "Not implemented..."
  echo ""
}

function git_dev_prune() {
  echo ""
  ./scripts/bash/git-dev-prune.sh
  echo ""
}

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
Select a function to run:
$(ColorGreen '1)') Deployment Menu
$(ColorGreen '2)') Switch to dev branch and prune
$(ColorGreen '0)') Exit
$(ColorBlue 'Choose an option:') "
  read -r a
  case $a in
  1)
    clear
    deployment_menu
    menu
    ;;
  2)
    clear
    git_dev_prune
    menu
    ;;
  0) exit 0 ;;
  *)
    clear
    invalid_option
    menu
    ;;
  esac
}

# Call the menu function
menu
