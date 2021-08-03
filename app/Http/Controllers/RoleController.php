<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index(){
      return Role::paginate();
    }

    public function show(Role $role){
      return $role;
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
