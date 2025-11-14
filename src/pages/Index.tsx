import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Григорий Циховский</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Подбор квартир в новостройках
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное сопровождение сделок купли-продажи недвижимости в Москве и Московской области
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="text-lg">
                  Получить консультацию
                </Button>
                <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">сделок</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">юридическая чистота</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Shield" className="text-accent" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Надежность</h3>
              <p className="text-muted-foreground">Полная юридическая проверка всех документов и объектов</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" className="text-accent" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Экономия времени</h3>
              <p className="text-muted-foreground">Берем на себя все этапы поиска и оформления сделки</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="TrendingDown" className="text-accent" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Выгодные условия</h3>
              <p className="text-muted-foreground">Помощь в получении максимальной скидки от застройщика</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл сопровождения сделки</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Search" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Подбор квартиры</CardTitle>
                    <CardDescription className="text-base">Найдем идеальный вариант по вашим критериям</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Анализ предложений от застройщиков Москвы и МО</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Подбор по вашим требованиям: район, планировка, бюджет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Организация просмотров и выезд на объекты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Проверка репутации застройщика</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileCheck" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Сопровождение сделки</CardTitle>
                    <CardDescription className="text-base">Полное юридическое сопровождение</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Проверка всех документов на квартиру</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Согласование условий договора долевого участия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Помощь в получении ипотеки на выгодных условиях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Сопровождение на всех этапах до получения ключей</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Calculator" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Финансовое консультирование</CardTitle>
                    <CardDescription className="text-base">Помощь в оформлении ипотеки</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Подбор оптимальной программы кредитования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Помощь в сборе и оформлении документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Взаимодействие с банками-партнерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Консультации по использованию материнского капитала</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Постоянная поддержка</CardTitle>
                    <CardDescription className="text-base">На связи 24/7</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Консультации на всех этапах покупки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Помощь в приемке квартиры от застройщика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Рекомендации по ремонту и оформлению</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Поддержка после завершения сделки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl opacity-90">Оставьте заявку и получите бесплатную консультацию</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (925) 588-35-56"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваши пожелания к квартире..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-accent" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-semibold">+7 (925) 588-35-56</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-accent" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">vsem.kvartiru.msk@mail.ru</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-75">© 2024 ИП Григорий Циховский. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
