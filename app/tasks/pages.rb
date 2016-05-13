class Pages

  class << self
    def run
      add_home!
      add_about!
      add_contact!
    end

    def add_home!

      name = "home"
      existing_page = Page.find_by(name: name)

      if existing_page.blank?
        Page.create!(name: name)
      end
    end

    def add_about!

      name = "about"
      existing_page = Page.find_by(name: name)

      if existing_page.blank?
        Page.create!(name: name)
      end
    end

    def add_contact!

      name = "contact"
      existing_page = Page.find_by(name: name)

      if existing_page.blank?
        Page.create!(name: name)
      end
    end
  end
end
