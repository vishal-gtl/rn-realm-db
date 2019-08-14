
Pod::Spec.new do |s|
  s.name         = "RNRnGtlRealmdb"
  s.version      = "1.0.0"
  s.summary      = "RNRnGtlRealmdb"
  s.description  = <<-DESC
                  RNRnGtlRealmdb
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNRnGtlRealmdb.git", :tag => "master" }
  s.source_files  = "RNRnGtlRealmdb/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  