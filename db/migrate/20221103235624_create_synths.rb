class CreateSynths < ActiveRecord::Migration[7.0]
  def change
    create_table :synths do |t|
      t.string :name
      t.float :distortion
      t.float :feedBack
      t.float :reverb

      t.timestamps
    end
  end
end
