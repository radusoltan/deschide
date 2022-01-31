<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
  public function index(){
    return Permission::all()->pluck('name');
  }
  public function show(Permission $permission){
    return $permission;
  }
  public function store(Request $request){

  }
  public function update(Request $request, Permission $permission){}
  public function destroy(Permission $permission){
    return $permission->delete();
  }
  public function getAll(){
    return Permission::all();
  }
  public function getAllByRole(Role $role){
    return $role->permissions()->get();
  }
}
