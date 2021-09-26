
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id')
    tbl.primary('project_id')
    tbl.text('project_name')
      .unique()
      .notNullable();        
    tbl.string('project_description')
    tbl.boolean('project_completed')
      .defaultTo(0);
  })

  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.primary('resource_id')
    tbl.text('resource_name')
      .unique()
      .notNullable();
    tbl.string('resource_description')  
  })

  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.primary('task_id')
    tbl.string('task_description')
      .notNullable();
    tbl.text('task_notes')
    tbl.boolean('task_completed')
      .defaultTo(0);
    tbl.foreign('project_id')
      .references('projects.project_id');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
