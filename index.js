const app = "I don't do much."

function destructivelyAppendKitten(name){
  window.kittens.push(name);

}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  window.kittens.splice(0, 1);
}

function appendKitten(name){
  var newKittens=[...window.kittens, name];
  return newKittens
}

function prependKitten(name){
  var newKittens=[name, ...window.kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens= window.kittens.slice(0, window.kittens.length-1);
  return newKittens
}

function removeFirstKitten(){
  var newKittens=window.kittens.slice(1);
  return newKittens
}
