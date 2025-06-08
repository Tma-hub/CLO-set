#!/bin/bash 
function odstran_diakritiku() {
  echo "$1" | tr 'ščěéřžýáíúůťňďó' 'sceerzyaiuutndo'
}
#Přejmenuj všechny .jpg soubory

for file in *.jpg; do
  newname=$(odstran_diakritiku "$file")
  if [[ "$file" != "$newname" ]]; then 
    mv "$file" "$newname"
    echo "Přejmenováno: $file → $newname"
  fi
done
