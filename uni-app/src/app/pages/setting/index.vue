<template>
    <view class="w-full h-screen box-border pt-[30rpx] bg-page setting-wrap" :style="themeColor()">
        <view class="m-[30rpx] mt-0 bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
            <u-cell-group :border="false">
                <u-cell :title="t('personalSettings')" :is-link="true" url="/app/pages/member/personal"></u-cell>
                <u-cell :title="t('switchLang')" :is-link="true" :value="lang" @click="langSheetShow = true"></u-cell>
                <u-cell :title="t('version')" :value="version"></u-cell>
            </u-cell-group>
        </view>
        <view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
            <u-cell-group :border="false">
                <u-cell :title="t('userAgreement')" :is-link="true" url="/app/pages/auth/agreement?key=service"></u-cell>
                <u-cell :title="t('privacyAgreement')" :is-link="true" url="/app/pages/auth/agreement?key=privacy"></u-cell>
            </u-cell-group>
        </view>

        <view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx]">
            <u-cell-group :border="false">
                <view class="text-center py-[20rpx] text-sm" @click="memberStore.logout(true)">{{ t('logout') }}</view>
            </u-cell-group>
        </view>

        <u-action-sheet :actions="langList" :show="langSheetShow" :closeOnClickOverlay="true"
            :safeAreaInsetBottom="true"
            @close="langSheetShow = false" @select="switchLang"></u-action-sheet>
    </view>
</template>

<script setup lang="ts">
    import { ref, reactive, computed } from 'vue'
    import useMemberStore from '@/stores/member'
    import { t, language } from '@/locale'
    import { currRoute, isWeixinBrowser } from '@/utils/common'

    const memberStore = useMemberStore()

    const version = ref(import.meta.env.VITE_APP_VERSION)

    /**
     * 支持的语言列表
     */
    const langList = reactive({
        'zh-Hans': { name: '简体中文', fontSize: '14', value: 'zh-Hans' },
        'en': { name: 'English', fontSize: '14', value: 'en' }
    })
    const langSheetShow = ref(false)

    // 当前语言
    const lang = computed(() => {
        const lang = uni.getLocale()
        return langList[lang].name
    })

    /**
     * 切换语言
     */
    const switchLang = (lang) => {
        language.loadAllLocaleMessages('app', lang.value)
    }
</script>

<style lang="scss" scoped>
    page {
        background: var(--page-bg-color);
    }

    :deep(.u-cell-group__wrapper) {
        .u-cell__body {
            padding-left: 0;
            padding-right: 0;
        }
		.u-cell__value{
			line-height: 1;
		}
        .u-cell {
            &:last-child .u-line {
                display: none;
            }
        }
    }
</style>
<style>
    .setting-wrap .u-cell--clickable{
        background-color: transparent;
    }
</style>
