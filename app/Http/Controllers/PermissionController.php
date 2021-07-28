<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
  public function index(){}
  public function show(Permission $permission){
    return $permission;
  }
  public function store(Request $request){

  }
  public function update(Request $request, Permission $permission){}
  public function destroy(Permission $permission){
    return $permission->delete();
  }
}