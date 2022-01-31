<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{

	public function __construct(){
//		$this->middleware('permission:role-list|role-edit|role-delete',['only'=>['index','store']]);
//		$this->middleware('permission:role-create',['only'=>['create','store']]);
//		$this->middleware('permission:role-edit',['only'=>['edit','update']]);
//		$this->middleware('permission:role-delete',['only'=>['destroy']]);
	}

    public function index(){
      return Role::with('permissions')->paginate();
    }

    public function show(Role $role){
      return [
        'role'=>$role,
        'permissions' => Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
	        ->where("role_has_permissions.role_id",$role->id)
	        ->get()
      ];
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request,Role $role)
    {

      try {
        $role->update([]);
        return response()->json(['state'=>1,'message'=>'Role '.$role.' was updated'],200);
      } catch (Exception $e){
        return $e;
      }
    }

    public function destroy(Role $role){
      try {
        $role->delete();

        return response()->json(['state'=>1,'message'=>'Role '.$role.' was deleted'],200);
      } catch (Exception $e){
        return $e;
      }
    }

}
