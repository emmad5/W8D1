class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lat
      t.float :long
      t.timestamps
    end
  end
end
