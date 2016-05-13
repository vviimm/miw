namespace :db do
  desc "Sets default pages"
  task pages: :environment do
    Pages.run
  end

  desc "Sets default settings pages"
  task page_settings: :environment do
    PageSettings.run
  end
end
