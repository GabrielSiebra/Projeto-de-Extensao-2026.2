import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';

const LandingPage = () => {
    // Itens da barra de navegação
    const navItems = [
        { label: 'Início', icon: 'pi pi-home' },
        { label: 'Funcionalidades', icon: 'pi pi-star' },
        { label: 'Sobre o Projeto', icon: 'pi pi-info-circle' }
    ];

    const logo = <h2 className="m-0 text-primary cursor-pointer">TeamSync</h2>; 
    const loginButton = <Button label="Entrar" icon="pi pi-user" className="p-button-outlined" />;

    return (
        <div className="landing-page flex flex-column min-h-screen">
            
            {/* 1. Header / Navbar */}
            <Menubar model={navItems} start={logo} end={loginButton} className="border-none shadow-1 p-3" />

            {/* 2. Hero Section (Topo da página) */}
            <div className="hero-section flex flex-column align-items-center justify-content-center text-center p-8 bg-blue-50">
                <h1 className="text-5xl font-bold mb-3 text-900">
                    Organize Times e Horários com Facilidade
                </h1>
                <p className="text-xl mb-5 text-700 max-w-30rem line-height-3">
                    A plataforma perfeita para agendar partidas, formar equipes equilibradas e gerenciar as regras do jogo sem complicação.
                </p>
                <div className="flex gap-3">
                    <Button label="Criar Conta Grátis" size="large" className="p-button-raised p-button-primary" />
                    <Button label="Ver como funciona" size="large" className="p-button-outlined" />
                </div>
            </div>

            {/* 3. Features Section (Funcionalidades) */}
            <div className="features-section p-6 bg-white">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-900">Tudo o que você precisa em um só lugar</h2>
                </div>
                
                {/* Sistema de Grid do PrimeFlex para responsividade */}
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <Card title="Agendamento Simples" className="h-full shadow-2 border-round-xl">
                            <p className="m-0 text-700 line-height-3">
                                Escolha os melhores horários disponíveis no calendário e reserve com poucos cliques.
                            </p>
                        </Card>
                    </div>
                    <div className="col-12 md:col-4">
                        <Card title="Formação de Times" className="h-full shadow-2 border-round-xl">
                            <p className="m-0 text-700 line-height-3">
                                Distribua os jogadores automaticamente ou arraste e solte para montar as equipes perfeitas para a partida.
                            </p>
                        </Card>
                    </div>
                    <div className="col-12 md:col-4">
                        <Card title="Perfis e Histórico" className="h-full shadow-2 border-round-xl">
                            <p className="m-0 text-700 line-height-3">
                                Cada jogador tem seu perfil, histórico de agendamentos e presença confirmada nos eventos.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* 4. Footer (Rodapé) */}
            <div className="footer bg-gray-900 text-white p-4 text-center mt-auto">
                <p className="m-0 text-400">
                    Projeto Acadêmico - Análise e Desenvolvimento de Sistemas
                </p>
            </div>
            
        </div>
    );
};

export default LandingPage;