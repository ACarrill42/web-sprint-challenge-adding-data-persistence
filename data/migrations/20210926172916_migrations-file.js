
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id')
    tbl.integer('project_id')
      .primary('project_id')
    tbl.string('project_name')
      .unique()
      .notNullable();        
    tbl.string('project_description')
    tbl.boolean('project_completed')
      .defaultTo(0);
  })

  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.integer('resource_id')
      .primary('resource_id')
    tbl.string('resource_name')
      .unique()
      .notNullable();
    tbl.string('resource_description')  
  })

  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.integer('task_id')
      .primary('task_id')
    tbl.string('task_description')
      .notNullable();
    tbl.text('task_notes')
    tbl.boolean('task_completed')
      .defaultTo(0);
    tbl.integer('project_id')
      .references('projects_id')
      .inTable('projects')
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')  
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
