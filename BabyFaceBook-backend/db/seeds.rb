require 'faker'

Baby.destroy_all

(1..20).each do | num | 
    Baby.create(
        {
            name: Faker::Name.name, 
            weight: (rand(5.0..10.0)).round(2),
            dob: Faker::Date.between(from: 1.year.ago, to: Date.today),
            img: Faker::Avatar.image,
            likes: rand(1..100), 
            gender: Faker::Demographic.sex
        }
    )
end