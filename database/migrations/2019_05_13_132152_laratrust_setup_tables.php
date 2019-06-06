<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class LaratrustSetupTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        // Create table for storing roles
        if (!Schema::hasTable('roles')) {
            Schema::create('roles', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->unique();
                $table->string('display_name')->nullable();
                $table->string('description')->nullable();
                $table->string('creation_author', 100)->default('Admin');
                $table->string('modification_author', 100)->default('Admin');
                $table->boolean('active')->default(true);
                $table->timestamps();
            });
        }

        // Create table for storing permissions
        if (!Schema::hasTable('permissions')) {
            Schema::create('permissions', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->unique();
                $table->string('display_name')->nullable();
                $table->string('description')->nullable();
                $table->string('creation_author', 100)->default('Admin');
                $table->string('modification_author', 100)->default('Admin');
                $table->boolean('active')->default(true);
                $table->timestamps();
            });
        }

        // Create table for associating roles to users and teams (Many To Many Polymorphic)
        if (!Schema::hasTable('role_user')) {
            Schema::create('role_user', function (Blueprint $table) {
                $table->unsignedInteger('role_id');
                $table->unsignedInteger('user_id');
                $table->string('user_type')->nullable();
                $table->string('creation_author', 100)->default('Admin');
                $table->string('modification_author', 100)->default('Admin');
                $table->boolean('active')->default(true);

                $table->foreign('role_id')->references('id')->on('roles')
                    ->onUpdate('cascade')->onDelete('cascade');

                $table->primary(['user_id', 'role_id', 'user_type']);
            });
        }

        // Create table for associating permissions to users (Many To Many Polymorphic)
        if (!Schema::hasTable('permission_user')) {
            Schema::create('permission_user', function (Blueprint $table) {
                $table->unsignedInteger('permission_id');
                $table->unsignedInteger('user_id');
                $table->string('user_type');
                $table->string('creation_author', 100)->default('Admin');
                $table->string('modification_author', 100)->default('Admin');
                $table->boolean('active')->default(true);

                $table->foreign('permission_id')->references('id')->on('permissions')
                    ->onUpdate('cascade')->onDelete('cascade');

                $table->primary(['user_id', 'permission_id', 'user_type']);
            });
        }

        // Create table for associating permissions to roles (Many-to-Many)
        if (!Schema::hasTable('permission_role')) {
            Schema::create('permission_role', function (Blueprint $table) {
                $table->unsignedInteger('permission_id');
                $table->unsignedInteger('role_id');
                $table->string('creation_author', 100)->default('Admin');
                $table->string('modification_author', 100)->default('Admin');
                $table->boolean('active')->default(true);
                $table->timestamps();

                $table->foreign('permission_id')->references('id')->on('permissions')
                    ->onUpdate('cascade')->onDelete('cascade');
                $table->foreign('role_id')->references('id')->on('roles')
                    ->onUpdate('cascade')->onDelete('cascade');

                $table->primary(['permission_id', 'role_id']);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return  void
     */
    public function down()
    {
        Schema::dropIfExists('permission_user');
        Schema::dropIfExists('permission_role');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('roles');
    }
}
