exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users=>{
        users.increments();
        users.string('username', 64).notNullable();
        users.string('email',128).notNullable();
        users.string('first_name',32);
        users.string('last_name', 32);
        users.string('password', 128).notNullable();
        users.string('profile_img');
    })
};

exports.down = function(knex, Promise) {
    return knex.shema.dropTableIfExists('users');
};
