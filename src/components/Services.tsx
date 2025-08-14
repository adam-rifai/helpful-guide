import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Zap, 
  PenTool, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Beautiful, responsive websites that convert visitors into customers",
      features: ["Responsive Design", "User Experience", "Performance Optimized", "SEO Ready"],
      price: "From $2,500",
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Design",
      description: "Intuitive mobile experiences for iOS and Android platforms",
      features: ["Native Design", "Prototyping", "User Testing", "App Store Ready"],
      price: "From $3,500",
      popular: true
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete visual identity systems that make your brand memorable",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
      price: "From $1,500",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Consulting",
      description: "Expert guidance to optimize your existing digital products",
      features: ["UX Audit", "User Research", "Design Strategy", "Optimization"],
      price: "From $150/hr",
      popular: false
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Design Systems",
      description: "Scalable design systems for consistent user experiences",
      features: ["Component Library", "Style Guide", "Documentation", "Maintenance"],
      price: "From $4,000",
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages",
      description: "High-converting landing pages for your marketing campaigns",
      features: ["Conversion Focused", "A/B Testing", "Analytics Setup", "Fast Loading"],
      price: "From $1,200",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Can Do For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services to help your business stand out and succeed online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-elegant transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-primary/50 bg-gradient-subtle' : 'bg-card'
              }`}
            >
              {service.popular && (
                <Badge 
                  className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${service.popular ? 'bg-primary/10' : 'bg-accent/50'}`}>
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={service.popular ? "hero" : "outline"} 
                  className="w-full group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="mb-6 opacity-90">
                Let's discuss your unique requirements and create a tailored solution that perfectly fits your needs.
              </p>
              <Button variant="glass" size="lg">
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;