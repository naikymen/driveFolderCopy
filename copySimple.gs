function driveFolderCopy() {
  
  var sourceFolder = "CHANGE_THIS"; //Source folder ID, CHANGE THIS.
  var source = DriveApp.getFolderById(sourceFolder);
  
  var targetParentFolderId  = "ALSO_CHANGE_THIS"  //Destination parent folder ID, CHANGE THIS.
  var targetParentFolder = DriveApp.getFolderById(targetParentFolderId);
  var target = targetParentFolder.createFolder(source.getName().concat("_copy"));  //Add a string at the end of the new folder
  
  copyFolder(source, target);
  
  var mensaje = "terminé con: "
  Logger.log(mensaje.concat(source.getName()))
}
 
function copyFolder(source, target) {

  var folders = source.getFolders();  //folders contiene las carpetas dentro del target FolderIterator
  var files   = source.getFiles();  //fildes contiene archivos dentro de target, pero no se si todos recursivamente
  
  while(files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), target);
  }
  
  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }  
  
}
