class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.text :description
      t.integer :capacity
      t.string :address
      t.float :latitude
      t.float :longitude
      t.datetime :available_dates, array: true, default: []
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
