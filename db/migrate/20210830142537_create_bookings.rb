class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.references :venue, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :tour, null: true, foreign_key: true
      t.datetime :dates, array: true, default: []
      t.boolean :status

      t.timestamps
    end
  end
end
